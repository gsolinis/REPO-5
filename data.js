var APP_DATA = {
  "scenes": [
    {
      "id": "0-escena-1",
      "name": "escena 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 703,
      "initialViewParameters": {
        "yaw": -1.27199825707957,
        "pitch": 0,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": -1.27199825707957,
          "pitch": 0,
          "rotation": 0,
          "target": "1-escena-2"
        },
        {
          "yaw": 1.04525674187615,
          "pitch": 0.10460992916020118,
          "rotation": 0,
          "target": "2-escena-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-escena-2",
      "name": "escena 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 703,
      "initialViewParameters": {
        "yaw": -1.1130926352004558,
        "pitch": 0.13924153904997638,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": 1.682216775971991,
          "pitch": 0.35550286222124683,
          "rotation": 0,
          "target": "0-escena-1"
        },
        {
          "yaw": 1.4544034661710192,
          "pitch": 0.09185317771668622,
          "rotation": 0,
          "target": "2-escena-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-escena-3",
      "name": "escena 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 703,
      "initialViewParameters": {
        "yaw": -0.08192361795076053,
        "pitch": 0.12458453493945854,
        "fov": 1.4070723946101484
      },
      "linkHotspots": [
        {
          "yaw": -0.3800151469478834,
          "pitch": 0.15579529074562615,
          "rotation": 0,
          "target": "0-escena-1"
        },
        {
          "yaw": -0.03479041461597454,
          "pitch": 0.06859921271367675,
          "rotation": 0,
          "target": "1-escena-2"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
