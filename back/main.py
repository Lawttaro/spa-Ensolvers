from pydantic import BaseModel
from database import *
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware




app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class JoinTask(BaseModel):
    task: str



@app.post("/createTask")
async def createTask(input: JoinTask):
    print(input.task)
    result = AddTask(input.task)
    if result == -1:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            details="Error in the create task",
        )
    print(result)
    return result


# @app.get("/")
# def prueba():
#     return 1