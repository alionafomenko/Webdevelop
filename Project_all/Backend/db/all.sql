procedure addApplication(p_sessionId  In varchar2,
                                           p_title      In varchar2,
                                           p_annotation In varchar2) is
  l_author_id number;
begin

  select s.user_id
    into l_author_id
    from sessions s
   where s.session_id = p_sessionId;

  insert into applications
  values
    (application_seq.nextval, l_author_id, p_title, p_annotation, 'НОВА');
  commit;
end addApplication;
procedure addToOrder(p_sessionId In varchar2,
                                       p_bookId    In number) is
  l_user_id number;
begin

  select s.user_id
    into l_user_id
    from sessions s
   where s.session_id = p_sessionId;

  insert into orders
  values
    (l_user_id, p_bookId);
  commit;

end addToOrder;
procedure getAllAuthorInf(p_sessionId   in varchar2,
                                            c_author      out sys_refcursor,
                                            c_application out sys_refcursor,
                                            p_error       out varchar2) is

  l_author_id number(10);
begin
  select s.user_id
    into l_author_id
    from sessions s
   where s.session_id = p_sessionId;

  open c_author for
    select a.id, a.name, a.lastname, a.email, a.phone
      from Authors a
     where a.id = l_author_id;

  open c_application for
    select ap.id,
           ap.book_title,
           ap.status
      from Applications ap
     where ap.author_id = l_author_id;

exception
  when no_data_found then
    p_error := 'nosession';
  
    open c_author for
      select *
        from dual
       where 0 = 1;
  
    open c_application for
      select *
        from dual
       where 0 = 1;
  
end;
procedure getAllUserInf(p_sessionId in varchar2,
                                          c_user      out sys_refcursor,
                                          c_order     out sys_refcursor,
                                          p_error     out varchar2) is

  l_user_id number(10);
begin
  select s.user_id
    into l_user_id
    from sessions s
   where s.session_id = p_sessionId;

  open c_user for
    select u.id, u.name, u.lastname, u.email, u.phone
      from users u
     where u.id = l_user_id;

  open c_order for
    select b.id,
           b.title,
           b.language,
           b.page_amount,
           b.annotation,
           b.price,
           a.name,
           a.lastname
      from orders o
      left join books b
        on (b.id = o.book_id)
      left join authors a
        on (a.id = b.author_id)
     where o.user_id = l_user_id;

exception
  when no_data_found then
    p_error := 'nosession';
  
    open c_user for
      select *
        from dual
       where 0 = 1;
  
    open c_order for
      select *
        from dual
       where 0 = 1;
  
end;
procedure getUsers(p_sessionId In varchar2,
                                     c_users     out sys_refcursor) is
  l_user_type varchar2(1);
begin

  select s.user_type
    into l_user_type
    from sessions s
   where s.session_id = p_sessionId;

  if l_user_type = 'a' then
    open c_users for
      select u.id, u.name, u.lastname, u.email, u.phone
        from Users u
       order by u.name;
  else
    open c_users for
      select *
        from dual
       where 0 = 1;
  end if;

exception
  when no_data_found then
    open c_users for
      select *
        from dual
       where 0 = 1;
  
end;
procedure get_Books(c_books out sys_refcursor) is
begin

  open c_books for
    select b.id,
           b.title,
           b.language,
           b.page_amount,
           b.annotation,
           b.price,
           a.name,
           a.lastname
      from books b
      left join authors a
        on (a.id = b.author_id)
     order by b.title;
end;
procedure isAdmin(p_sessionid in varchar2,
                                    p_isAdmin   out varchar2) is
  l_user_type varchar2(255);
begin
  select s.user_type
    into l_user_type
    from sessions s
   where s.session_id = p_sessionid;

  if l_user_type = 'a' then
    p_isAdmin := 'true';
  else
    p_isAdmin := 'false';
  end if;

end isAdmin;
procedure loginAdmin(p_sessionId IN varchar2,
                                       p_email     IN varchar2,
                                       p_password  IN varchar2,
                                       p_error     out varchar2) is

  l_admin_id       number;
  l_admin_password varchar2(255);

begin

  select a.id, a.password
    into l_admin_id, l_admin_password
    from ADMINS a
   where a.email = p_email;

  if p_password = l_admin_password then
    begin
      insert into sessions
        (session_id, user_type, user_id)
      values
        (p_sessionId, 'a', l_admin_id);
    exception
      when dup_val_on_index then
        update sessions
           set user_id = l_admin_id
         where session_id = p_sessionId;
    end;
    commit;
    return;
  else
    p_error := 'invalidpassword';
  end if;

exception
  when no_data_found then
    p_error := 'nouser';
  
end;
procedure loginAuthor(p_sessionId IN varchar2,
                                        p_email     IN varchar2,
                                        p_password  IN varchar2,
                                        p_error     out varchar2) is

  l_author_id       number;
  l_author_password varchar2(255);

begin

  select a.id, a.password
    into l_author_id, l_author_password
    from Authors a
   where a.email = p_email;

  if p_password = l_author_password then
    begin
      insert into sessions
        (session_id, user_type, user_id)
      values
        (p_sessionId, 'w', l_author_id);
    exception
      when dup_val_on_index then
        update sessions
           set user_id = l_author_id
         where session_id = p_sessionId;
    end;
    commit;
    return;
  else
    p_error := 'invalidpassword';
  end if;

exception
  when no_data_found then
    p_error := 'nouser';
  
end;
procedure loginUser(p_sessionId IN varchar2,
                                      p_email     IN varchar2,
                                      p_password  IN varchar2,
                                      p_error     out varchar2) is

  l_user_id       number;
  l_user_password varchar2(255);

begin

  select u.id, u.password
    into l_user_id, l_user_password
    from USERS u
   where u.email = p_email;

  if p_password = l_user_password then
    begin
      insert into sessions
        (session_id, user_type, user_id)
      values
        (p_sessionId, 'u', l_user_id);
    exception
      when dup_val_on_index then
        update sessions
           set user_id = l_user_id
         where session_id = p_sessionId;
    end;
    commit;
    return;
  else
    p_error := 'invalidpassword';
  end if;

exception
  when no_data_found then
    p_error := 'nouser';
  
end;
procedure logout(p_sessionid in varchar2) is
begin

  delete from sessions s
   where s.session_id = p_sessionid;
  commit;
end logout;
procedure registrationAuthor(p_sessionId IN varchar2,
                                               p_name      in varchar2,
                                               p_lastName  in varchar2,
                                               P_email     In varchar2,
                                               p_password  In varchar2,
                                               p_phone     in varchar2,
                                               p_error     out varchar2) is
  l_author_id varchar2(255);
begin

  select a.id
    into l_author_id
    from Authors a
   where a.email = p_email;

  p_error := 'hasalredysuchemail';

exception
  when no_data_found then
    insert into Authors
    values
      (book_sequence.NEXTVAL,
       p_name,
       p_lastName,
       P_email,
       p_password,
       p_phone);
    begin
      insert into sessions
        (session_id, user_type, user_id)
      values
        (p_sessionId, 'w', l_author_id);
    exception
      when dup_val_on_index then
        update sessions
           set user_id = l_author_id
         where session_id = p_sessionId;
    end;
    commit;
  
end registrationAuthor;
procedure registrationuser(p_sessionId IN varchar2,
                                             p_name      in varchar2,
                                             p_lastName  in varchar2,
                                             P_email     In varchar2,
                                             p_password  In varchar2,
                                             p_phone     in varchar2,
                                             p_error     out varchar2) is
  l_user_id varchar2(255);
begin

  select u.id
    into l_user_id
    from USERS u
   where u.email = p_email;
   
    p_error := 'hasalredysuchemail';

exception
  when no_data_found then
    insert into USERS
    values
      (user_sequences.NEXTVAL,
       p_name,
       p_lastName,
       P_email,
       p_password,
       p_phone);
    begin
      insert into sessions
        (session_id, user_type, user_id)
      values
        (p_sessionId, 'u', l_user_id);
    exception
      when dup_val_on_index then
        update sessions
           set user_id = l_user_id
         where session_id = p_sessionId;
    end;
    commit;
  
end registrationuser;
TRIGGER USED_SPARE_PARTS_TRG
AFTER INSERT
    ON USED_SPARE_PARTS
   FOR EACH ROW
BEGIN

  UPDATE SPARE_PARTS
  SET REST_AMOUNT = REST_AMOUNT - :NEW.AMOUNT
  WHERE ID = :NEW.SPARE_PART_ID;

END;

