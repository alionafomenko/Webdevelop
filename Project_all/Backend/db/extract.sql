select replace(replace(text, chr(10)), chr(13))
from all_source
where owner = 'ALIONA'
order by type, name, line;

