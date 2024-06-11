from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_users():
    return {"users": []}

@router.post("/")
async def post_user(name: str):
    return {"status": "success", "name": name}
