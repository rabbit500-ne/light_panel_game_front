
# ラズベリーパイサーバ設計
## 構成
/home/pi/remote_light_game_pi/
remote-light-puzzle/
├── src/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── camera_control.py
│   │   ├── led_control.py
│   │   ├── websocket_server.py
│   │   └── utils.py
│   ├── config/
│   │   └── settings.py
│   ├── static/
│   │   ├── images/
│   │   └── css/
│   └── logs/
│       ├── app.log
│       └── errors.log
└── README.md

## 必要アプリケーション
Python 3.9.6
Python環境(pyenv, venv)
ライブラリ管理(pip)
WebSocketサーバー（FastAPI）
カメラ制御
LEDライト制御スクリプト(rpi_ws281x)

# ハードエンティティ
## Raspberrypi
Raspberrypi 3

## LEDライトパネル
BTF-LIGHTING LEDパネル WS2812B ECO RGB
8x8タイプ

## 電源
5V電源アダプター(DC 5V 3A)

## DC電源コネクタ
購入先：https://www.monotaro.com/g/00897003/

## カメラ
Raspberry Pi Camera Module V2
購入先：https://www.raspberrypi.org/products/camera-module-v2/

# 実装の詳細
## ラズベリーパイ実装
Python：LEDライトの制御、カメラ映像のストリーミング
WebSocketサーバー：ブラウザとのリアルタイム通信を管理(Python FAST API)
