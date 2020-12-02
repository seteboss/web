<template>
  <div>
    <div class="row text-main-color text-center">
      <div class="col-md border-main-left p-3">
        <h4 class="text-header text-left pb-2">Название диеты</h4>
        <label for="inputName" class="sr-only "></label>
        <input id="inputName" class="form-control bg-black w-50" required autofocus>

        <h4 class="text-header text-left pt-3">Описание диеты</h4>
        <label for="inputInfo" class="sr-only"></label>
        <textarea id="inputInfo" class="form-control bg-black mt-3 h-info" required autofocus></textarea>

        <h4 class="text-header text-left pt-3">Тип диеты</h4>
        <label class="mr-sm-2" for="inputType"></label>
        <select class="custom-select mr-sm-2 w-25 float-left" id="inputType">
          <option selected>Выбрать</option>
          <option value="1">На повышение массы</option>
          <option value="2">На похудение</option>
        </select>

        <h4 class="text-header text-left pt-4">Превью</h4>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile">
          <label class="custom-file-label" for="customFile">Выберете изображение</label>
        </div>
        <h4 class="text-header text-left pt-4">Приём пищи</h4>
        <label class="mr-sm-2" for="inputСomplexity"></label>
        <select class="custom-select mr-sm-2 w-25 float-left" id="inputСomplexity">
          <option selected>Выбрать</option>
          <option value="1">Завтрак</option>
          <option value="2">Воторой завтрак</option>
          <option value="3">Обед</option>
          <option value="4">Ужин</option>
        </select>

        <h5 class="text-header text-left pt-4">Описание</h5>
        <label for="inputInfoExercise" class="sr-only"></label>
        <textarea id="inputInfoExercise" class="form-control bg-black mt-3 h-info" required autofocus></textarea>
        <button type="button" class="btn btn-main float-left mt-3">Добавить</button>

      </div>
      <div class="col-md border-main-right p-3">
        <img class="border-img" src="../img/vegetables.png" alt="" width="180" height="180">
        <h3 class="text-header text-left pt-3 text-center">Белковая диета</h3>
        <ul class="float-left text-left">
          <li>
            <h5>Описание диеты</h5>
            <p> Белковая диета подойдёт, если деятельность человека сопровождается значительными
              нагрузками на мышцы или занятиями физкультурой и спортом. Данная диета ускоряет метаболизм,
              повышает массу мышц и улучшает их структуру (выводя жировые отложения и воду), помогает
              организму восстановиться после больших нагрузок, нормализовать вес. Поэтому такая диета для
              спортсменов рекомендует включать в полтора-два раза больше белка (до 5 гр. на 1 кг веса в день),
              чем рацион обычного человека.</p>
          </li>
          <li>
            <h5>Тип диеты</h5>
            <p>Набор массы</p>
          </li>
          <li>
            <h5>Расписание</h5>
            <ol>
              <li>
                Завтраки
              </li>
              <ol>
                <li>
                  Персики, творожные продукты, чай.
                </li>
                <li>
                  Поджаренный зерновой хлеб, садовые ягоды, сыр твердых сортов, чай, мед.
                </li>
                <li>
                  Салат из фруктов, нежирный йогурт.
                </li>
              </ol>
              <li>
                Обеды
              </li>
              <ol>
                <li>
                  Мясо на гриле, пшенная каша, овощной салат, компот.
                </li>
                <li>
                  Томатный суп, вареная телятина, салат из капусты, чай.
                </li>
                <li>
                  Тушеная куриная грудка, салат из свеклы с сыром.
                </li>
              </ol>
              <li>
                Ужины
              </li>
              <ol>
                <li>
                  Форель на гриле, овощной салат, печеный картофель, томатный сок.
                </li>
                <li>
                  Запеченная рыба с зеленым горошком.
                </li>
              </ol>

            </ol>
          </li>
        </ul>

      </div>
    </div>
  </div>

</template>

<script>

export default {
name: "DietsEditor"
}
</script>

<style scoped>

</style>