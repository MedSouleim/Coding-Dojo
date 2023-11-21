select * from names;
INSERT INTO names (name) 
VALUES('Med Souleim'),
      ('Boulila Jasser'),
      ('Rouis Anis');
UPDATE names
SET name = 'Aziz'
WHERE id = 3;  
SET SQL_SAFE_UPDATES = 0;

delete from names where Id in(2,6,7,8,9,10,11,12,13,14);
