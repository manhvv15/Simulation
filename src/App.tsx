import React from "react";

const zones = ["wall1", "wall2", "ceiling", "floor", "curtain"];

const materials = [
  { id: "catelog", label: "Chọn theo danh mục, màu sắc hoặc hoa văn" },
  { id: "search", label: "Tìm kiếm sản phẩm" },
  // Ví dụ thêm nhóm màu
  { id: "floorTiles", label: "Floor Tiles" },
  { id: "cushionFloor", label: "Cushion Floor" },
  { id: "carpet", label: "Carpet" },
];

const App: React.FC = () => {
  return (
    <div className="flex flex-row p-4 gap-6">
      {/* Bên trái: vùng chọn và ảnh */}
      <div className="flex flex-col gap-4 w-2/5">
        <h2 className="font-bold text-lg mb-2">Vùng chọn</h2>
        <div className="flex gap-2 mb-4">
          {zones.map((zone) => (
            <button
              key={zone}
              className="border border-gray-400 rounded px-2 py-1 text-sm hover:bg-gray-200"
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Ảnh phòng */}
        <div className="border border-gray-300 rounded overflow-hidden">
          <img
            src="/room.jpg"
            alt="Phòng khách"
            className="w-full object-cover rounded"
          />
        </div>
      </div>

      {/* Bên phải: bảng chọn catalog và vật liệu */}
      <div className="flex flex-col gap-3 w-3/5">
        {/* Tab chọn catalog / color / pattern */}
        <div className="flex gap-2 mb-2 border-b border-gray-300">
          {materials.map((mat) => (
            <button
              key={mat.id}
              className="px-3 py-1 text-sm border-b-2 border-transparent hover:border-blue-600"
            >
              {mat.label}
            </button>
          ))}
        </div>

        {/* Khu vực chứa các mẫu vật liệu */}
        <div
          className="grid grid-cols-5 gap-3 overflow-y-auto"
          style={{ maxHeight: 320 }}
        >
          {/* Dùng ảnh ví dụ, bạn thay bằng dữ liệu thật */}
          {[
            "/textures/wood.jpg",
            "/textures/curtain.jpg",
            "/textures/floor1.jpg",
            "/textures/floor2.jpg",
            "/textures/floor3.jpg",
            "/textures/pattern1.jpg",
            "/textures/pattern2.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="cursor-pointer border border-gray-200 rounded overflow-hidden"
            >
              <img
                src={src}
                alt={`Material ${i}`}
                className="w-full h-20 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Các sản phẩm đã chọn (dưới cùng) */}
        <div className="mt-3 border-t border-gray-300 pt-2">
          <h3 className="font-semibold mb-2">Sản phẩm được chọn</h3>
          <div className="flex gap-2">
            {/* Ví dụ tạm, bạn xử lý data động */}
            <div className="w-16 h-16 bg-gray-200 rounded" />
            <div className="w-16 h-16 bg-gray-300 rounded" />
            <div className="w-16 h-16 bg-gray-400 rounded" />
            <div className="w-16 h-16 bg-gray-500 rounded" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
