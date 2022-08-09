import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

PRIMARY_HOST = os.getenv("DETA_SPACE_APP_HOSTNAME") or "localhost:3000"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[f"https://{PRIMARY_HOST}"],
    allow_credentials=True,
)

@app.get("/")
async def index():
    return "yeah baby"