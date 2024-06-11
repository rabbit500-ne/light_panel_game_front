from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.requests import Request
from starlette.responses import HTMLResponse

app = FastAPI()

# Static files configuration
app.mount("/static", StaticFiles(directory="src/app/static"), name="static")

# Template configuration
templates = Jinja2Templates(directory="src/app/templates")

from .api import score_handler, user_handler

app.include_router(score_handler.router, prefix="/api/scores")
app.include_router(user_handler.router, prefix="/api/users")

# Root endpoint to serve the main page
@app.get("/", response_class=HTMLResponse)
async def read_root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})
