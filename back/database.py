import re
from pony.orm import *
from typing import Optional, List

db = Database()


# id generated auto
class Task(db.Entity):
    name = Required(str)
    inFold = Optional["task"]


class Folder(db.Entity):
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

@db_session
def upTask(id: int, name: str):
    try:
        task = Task.get(id=id)
        task.name = name
        task.flush()
        return task.to_dict(["id","name"])
    except:
        return -1

@db_session
def rmTask(id: int):
    try:
        task = Task.get(id=id)
        task.delete()
        return 0
    except:
        return -1


## folders

@db_session
def addFold( name: str):
    try: 
        newFold = Folder(name=name)
        newFold.flush()
        return newFold.to_dict(["id","name"])
    except:
        return -1


@db_session
def AllTakes(tk: int, idFold: int):
    try:
        aux = Task.get(id=tk)
        foldAux = Folder.get(id=tk)
        aux.inFold = foldAux
        aux.flush()
        return 1
    except:
        return - 1