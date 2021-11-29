from pydantic import BaseModel
from database import *
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from typing import List



app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JoinTask(BaseModel):
    id: int
    task: str


class JoinFold(BaseModel):
    id: int 
    foldName: str

class ThisTask(BaseModel):
    listTake: List[int] = []

## romperlo. enviar vacio! 
@app.post("/createTask")
async def createTask(input: JoinTask):
    result = AddTask(input.task)
    if result == -1:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            details="Error in the create task",
        )
    return result


## romperlo. enviar vacio! 
@app.put("/updateTask",status_code=status.HTTP_200_OK)
async def updateTask(input: JoinTask):
    result = upTask(input.id,input.task)
    if result == -1:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            details="Error in update task",
        )
    return result


@app.post("/deleteTask")
async def deleteTask(input: JoinTask):
    result = rmTask(input.id)
    if result == -1:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            details="Error in delete task",
        )
    return result

## folders

@app.post("/createFold")
async def createFold(input: JoinFold):
    result = addFold(input.foldName)
    if result == -1:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            details="Error in create fold",
        )
    return result

@app.put("/updFold",status_code=status.HTTP_200_OK)
async def TasksInFold(input: ThisTask):
    result = 0
    leng = len(input.listTake)
    for i in range(0,leng):
        result = AllTakes(input.listTake[i])
        if result == -1:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                details="Error in update fold",
            )
    return result
