# React Native Metin Ters Çevirme Uygulaması

Bu proje, React Native ve Expo kullanılarak geliştirilmiş, kullanıcı tarafından girilen metni tersine çeviren basit bir mobil uygulamadır. Uygulama, React Native'in temel bileşenlerini, state yönetimini, olayları ve test süreçlerini öğrenmek amacıyla geliştirilmiştir. Proje, modern Expo projelerinde yaygın olan Expo Router ile dosya tabanlı yönlendirme yapısını kullanmaktadır.

## ✨ Temel Özellikler

* Kullanıcının metin girebileceği bir giriş alanı (`TextInput`).
* Girilen metni ters çevirme işlemini başlatan bir buton (`Button`).
* Giriş alanını ve sonucu temizleyen bir "Temizle" butonu (`Button`).
* Ters çevrilmiş metnin gösterildiği bir metin alanı (`Text`).
* Girilen metin için maksimum karakter sınırı (örn: 50) ve aşıldığında hata mesajı gösterimi.
* Expo Router ile basit sekme tabanlı navigasyon yapısı (tek sekmeli).

## 💻 Kullanılan Teknolojiler

* **Çerçeve (Framework):** React Native (Expo SDK)
* **Yönlendirme (Routing):** Expo Router
* **Dil (Language):** TypeScript
* **Test:**
    * Jest (Test Çalıştırıcı)
    * React Native Testing Library (Bileşen Test Kütüphanesi)
* **Paket Yöneticisi:** npm veya yarn

## 📂 Proje Yapısı

Proje, Expo Router'ın dosya tabanlı yönlendirme sistemine uygun bir yapı kullanmaktadır:
