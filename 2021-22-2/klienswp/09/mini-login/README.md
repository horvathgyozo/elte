# Login

Készíts bejelentkezési űrlapot!

1. Az alkalmazásban elő van már készítve egy `Login` és egy `Private` komponens! Elemezd a keretprogram felépítését!
2. Hozz létre az `App` komponensben egy `loggedInUser` állapotváltozót! Kezdőértéke legyen `null`, ez fogja tartalmazni a bejelentkezett felhasználó felhasználónevét. Hozz létre egy `login` és egy `logout` segédfüggvényt, mely beállítja a felhasználónevet, illetve visszaállítja az értéket `null`-ra!
3. Ha `loggedInUser` értéke `null`, rendereljük a `Login` komponenst, ellenkező esetben a `Private` komponenst.
4. A `Login` komponensben valósíts meg a bejelentkezési űrlapot egy mezővel a felhasználónévre, jelszóra és egy gombbal az elküldéshez! Az űrlap legyen "uncontrolled" módon megvalósítva `useRef` hook-ot használva! Kezeljük le az űrlap elküldésének eseményét, és frissítsük a `loggedInUser` állapotot a `login` metódus segítségével!
5. Alkalmazzunk valamilyen validációt a felhasználónévre/jelszóra! Például mindkét mező kitöltése legyen kötelező! Ha hiba van, akkor azt jelenítsük meg az oldalon, és ne engedjük az űrlap elküldését. A hibaüzeneteket tároljuk el állapotváltozóban (pl. `errors`)!
6. Kapjon a felhasználónév mezője fókuszt, amikor betöltődik a komponens! Ehhez használj `useEffect`-et és a ref-eket!
7. A `Private` komponensben írjuk ki a bejelentkezett felhasználó nevét, jelenítsünk meg egy gombot, mellyel ki lehet jelentkezni!
8. Valósítsuk meg a bejelentkezési űrlapot "controlled" módon is!
9. Szervezzük ki az űrlapkezelést egyedi hook-ba (pl. `useForm`)!
10. Alkalmazz stílusozást inline css, css fájl, css module használatával!
11. Próbálj ki egy React alapú komponenskönyvtárat, pl. [Material UI](https://mui.com/), [Semantic UI React](https://react.semantic-ui.com/)! Ehhez a csomagok elő vannak készítve a `package.json` állományban, csak telepíteni kell őket!
12. Tárold el a bejelentkezett felhasználót contextbe, és amely komponensnek szüksége van rá, onnan olvassa ki!
