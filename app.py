import uvicorn
from pathlib import Path
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI, Request, HTTPException


app = FastAPI()
send_mail_to = "https://formcarry.com/s/AqfcQ_gH0M_"


app.mount("/static", StaticFiles(directory=Path(__file__).parent / "static"), name="static")
templates = Jinja2Templates(directory=Path(__file__).parent / "templates")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)


@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {
        "request": request, 
        "send_mail_to": send_mail_to
    })


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
    
