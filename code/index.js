let ayahNumber = document.querySelector(".ayah-id");
let ayahText = document.querySelector(".ayah-text");
let btnManual = document.querySelector(".btn-generate");
let btnAuto = document.querySelector(".btn-auto");
let btnStop = document.querySelector(".btn-stop");
let surahName = document.querySelector(".surah-name");
let statusMessage = document.querySelector(".status-ayah");

let ayatList = [];
let intervalId = null;

btnManual.onclick = displayRandomAyah;
btnAuto.onclick = startAutoDisplay;
btnStop.onclick = stopAutoDisplay;
async function fetchAllAyat() {
  try {
    if (ayatList.length > 0) return ayatList;

    const res = await fetch("https://api.alquran.cloud/v1/quran/quran-uthmani");
    const data = await res.json();

    ayatList = data.data.surahs.flatMap((surah) =>
      surah.ayahs.map((ayah) => ({
        text: ayah.text,
        surahName: surah.name,           // اسم السورة بالعربي
        numberInSurah: ayah.numberInSurah // رقم الآية في السورة
      }))
    );

    return ayatList;
  } catch (error) {
    ayahText.innerHTML = "❌ حصل خطأ أثناء تحميل الآيات.";
    surahName.innerHTML = "";
    ayahNumber.innerHTML = "";
  }
}


function displayRandomAyah() {
  if (ayatList.length === 0) return;

  const ayah = ayatList[Math.floor(Math.random() * ayatList.length)];

  ayahText.innerHTML = ayah.text;
  ayahNumber.innerHTML = ayah.numberInSurah;
  surahName.innerHTML = ayah.surahName;

  ayahText.style.animation = "none";
  void ayahText.offsetWidth;
  ayahText.style.animation = "fadeIn 0.7s ease-in-out";
}

async function startAutoDisplay() {
  await fetchAllAyat();
  intervalId = setInterval(displayRandomAyah, 4000);

  statusMessage.classList.remove("d-none", "text-danger");
  statusMessage.classList.add("d-block", "text-success");
  statusMessage.innerHTML = "⏳ يتم الآن عرض الآيات تلقائيًا...";
}

function stopAutoDisplay() {
  clearInterval(intervalId);
  statusMessage.classList.remove("text-success");
  statusMessage.classList.add("text-danger");
  statusMessage.innerHTML = "🛑 تم إيقاف العرض التلقائي.";
}

fetchAllAyat();
