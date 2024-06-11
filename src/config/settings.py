import os

class Settings:
    PROJECT_NAME: str = "Remote Light Puzzle"
    DEBUG: bool = os.getenv("DEBUG", True)

settings = Settings()
