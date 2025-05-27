import React, { useEffect, useState } from "react";
import { useTranslation } from "./useTranslation";
import { useLanguage } from "./LanguageContext";

export default function HomePage() {
  const { t } = useTranslation();
  const { lang } = useLanguage(); // không cần setLang ở đây
  const [piUser, setPiUser] = useState<any>(null);
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const Pi = (window as any).Pi;

    if (Pi && Pi.authenticate) {
      Pi.authenticate(["username"])
        .then((authResult: any) => {
          setPiUser(authResult.user);
          setBalance(3000); // Hoặc gọi API blockchain để lấy số dư thật
          localStorage.setItem("pi_user", JSON.stringify(authResult.user));
          console.log("✅ Đăng nhập thành công:", authResult.user);
        })
        .catch((err: any) => {
          console.error("❌ Lỗi khi đăng nhập Pi:", err);
        });
    } else {
      console.warn("⚠️ Pi SDK không khả dụng trong trình duyệt này.");
    }
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* Banner */}
      <div style={{ marginBottom: "20px" }}>
        <img
          src="https://via.placeholder.com/600x200?text=Welcome+to+Betzone"
          alt="Welcome Banner"
          style={{ width: "100%", borderRadius: "10px" }}
        />
      </div>

      {/* Số dư người dùng */}
      <div
        style={{
          backgroundColor: "#222",
          color: "#fff",
          padding: "15px",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      >
        <p>👤 {t.user}: {piUser?.username || t.pending}</p>
        <p>💰 {t.pi_balance}: {balance !== null ? `${balance} Pi` : t.pending}</p>
      </div>

      {/* Khuyến mãi */}
      <div>
        <h3>🔥 {t.promotions}</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>🎁 {t.promo1}</li>
          <li>💸 {t.promo2}</li>
          <li>🏆 {t.promo3}</li>
        </ul>
      </div>
    </div>
  );
}
