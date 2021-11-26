from pony.orm import *

db = Database()


# id generated auto
class Elements(db.Entity):
    name = Required(str)


db.bind("sqlite", "files_db", create_db=True)
db.generate_mapping(create_tables=True)
