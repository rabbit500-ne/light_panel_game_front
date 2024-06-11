from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_scores():
    return {"scores": []}

@router.post("/")
async def post_score(score: int):
    return {"status": "success", "score": score}
