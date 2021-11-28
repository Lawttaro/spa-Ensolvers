import re
from pony.orm import *

db = Database()


# id generated auto
class Task(db.Entity):
    name = Required(str)


db.bind("sqlite", "files_db", create_db=True)
db.generate_mapping(create_tables=True)


# methods
@db_session
def AddTask(taskName: str):
    try: 
        newTask = Task(name=taskName)
        newTask.flush()
        return newTask.to_dict(["id","name"])
    except:
        return -1

