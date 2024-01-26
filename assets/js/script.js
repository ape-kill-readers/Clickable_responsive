// script.js

// CDNから imageMapResizer ライブラリを読み込む
const script = document.createElement("script");
script.src =
  "https://cdnjs.cloudflare.com/ajax/libs/image-map-resizer/1.0.10/js/imageMapResizer.min.js";
document.head.appendChild(script);

// ライブラリの読み込みが完了したら、imageMapResize 関数を実行
script.onload = function () {
  // JSON ファイルを読み込み、座標データを設定
  fetch("./data/coordinates.json")
    .then((response) => response.json())
    .then((data) => {
      data.areas.forEach((area) => {
        const areaElement = document.createElement("area");
        areaElement.setAttribute("shape", area.shape);
        areaElement.setAttribute("coords", area.coords.join(","));
        areaElement.setAttribute("href", area.href);
        areaElement.setAttribute("alt", area.alt)
        // 他の属性も必要に応じて設定
        document.querySelector("map").appendChild(areaElement);
      });

      // imageMapResize を実行
      imageMapResize();
    })
    .catch((error) => console.error("Error loading coordinates.json:", error));
};
