## 3. Lengthy input (7 pont)

Adott egy szöveges beviteli mező, aminek be van állítva, hogy legfeljebb mennyi karakter írható bele. Progresszíven fejlesszük fel ezt úgy, hogy a keretének színével jelezzük mint egy progress bar, hogy hol tartunk a szöveg hosszával a maximálishoz képest. A következőképpen szeretném az input mezőt jelezni:

```html
<input type="text" maxlength="20" is="lengthy-input" data-color="red" />
```

- a. Készíts olyan komponenst az input mezőből, amelybe gépelve a konzolra kiírod a szöveg hosszát és a lehetséges maximális hosszt. (3 pont)
- b. A két érték arányának megfelelően állítsd be az input mező stílusának `border-image-source` tulajdonságát az alábbiaknak megfelelően (`százalék`): (2 pont)
  ```css
  border-image-source: linear-gradient(
    to right,
    orange százalék%,
    hsla(0, 0%, 90%, 1) százalék% 100%
  );
  ```
- c. Ha meg van adva a `data-color` attribútum, akkor annak értékét használjuk fel a keret színezéséhez! A fenti kódrészletben az `orange` szót kell kicserélni az aktuális értékre. (1 pont)
- d. Tegyük lehetővé, hogy a színbeállítást JavaScript API-n is elérjük, de ez a `data-color` attribútumot is szinkronban tartsa (1 pont)
  ```js
  input.color = "red"; // --> data-color="red"
  console.log(input.color); // <-- data-color="red" --> "red"
  ```
