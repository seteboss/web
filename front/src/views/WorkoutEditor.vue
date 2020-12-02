<template>
  <div>
    <div class="row text-main-color text-center">
      <div class="col border-main-left border-main-xs p-3 ">
        <h4 class="text-header text-left pb-2">Название программы</h4>
        <label for="inputName" class="sr-only "></label>
        <input id="inputName" class="form-control bg-black w-50" required autofocus>

        <h4 class="text-header text-left pt-3">Описание программы</h4>
        <label for="inputInfo" class="sr-only"></label>
        <textarea id="inputInfo" class="form-control bg-black mt-3 h-info" required autofocus></textarea>

        <h4 class="text-header text-left pt-3">Тип программы</h4>
        <label class="mr-sm-2" for="inputType"></label>
        <select class="custom-select mr-sm-2 w-25 float-left" id="inputType">
          <option selected>Выбрать</option>
          <option value="1">На повышение массы</option>
          <option value="2">На похудение</option>
        </select>

        <h4 class="text-header text-left pt-4">Сложность программы</h4>
        <label class="mr-sm-2" for="inputСomplexity"></label>
        <select class="custom-select mr-sm-2 w-25 float-left" id="inputСomplexity">
          <option selected>Выбрать</option>
          <option value="1">Лёгкая</option>
          <option value="2">Средняя</option>
          <option value="3">Сложная</option>
        </select>

        <h4 class="text-header text-left pt-4">Превью</h4>
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="customFile">
          <label class="custom-file-label bg-black" for="customFile">Выберете изображение</label>
        </div>
        <div>
          <h4 class="text-header text-left pt-3">Упражнение</h4>
          <h5 class="text-header text-left pt-3">Тип упражнения</h5>
          <label class="mr-sm-2" for="selectType"></label>
          <select class="custom-select mr-sm-2 w-25 float-left" id="selectType">
            <option selected>Выбрать</option>
            <option value="1">Кардио</option>
            <option value="2">Динамическое</option>
            <option value="3">Статическое</option>
          </select>
          <h5 class="text-header text-left pt-4">Описание упражнение</h5>
          <label for="inputInfoExercise" class="sr-only"></label>
          <textarea id="inputInfoExercise" class="form-control bg-black mt-3 h-info" required autofocus></textarea>

          <h5 class="text-header text-left pt-3">Количество подходов</h5>
          <label for="countApproaches" class="sr-only "></label>
          <input id="countApproaches" class="form-control bg-black w-25" required autofocus>

          <h5 class="text-header text-left pt-3">Количество повторений</h5>
          <div class="input-group mb-3 w-25">
            <div class="input-group-prepend">
              <span class="input-group-text bg-black" id="basic-addon1">Подход 1</span>
            </div>
            <input type="text" class="form-control bg-black" aria-label="Имя пользователя" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3 w-25">
            <div class="input-group-prepend">
              <span class="input-group-text bg-black" id="basic-addon2">Подход 2</span>
            </div>
            <input type="text" class="form-control bg-black" aria-label="Имя пользователя" aria-describedby="basic-addon2">
          </div>
          <button type="button" class="btn btn-main float-left">Добавить</button>
        </div>

      </div>
      <div class="col border-main-right border-main-xs p-3">
        <img class="" src="../img/logo.png" alt="" width="200" height="200">
        <h3 class="text-header text-left pt-3 text-center">Программа 1</h3>
        <ul class="float-left text-left">
          <li>
            <h5>Описание программы</h5>
            <p>Это базовая тренировочная программа, предназначенная для того, что бы нарастить общий мышечный
              объем.</p>
          </li>
          <li>
            <h5>Тип программы</h5>
            <p>Набор массы</p>
          </li>
          <li>
            <h5>Сложность программы</h5>
            <p>Средняя</p>
          </li>
          <li>
            <h5>Упражнения</h5>
            <ol>
              <li>
                Жим штанги лежа — это тяжелое базовое упражнение для проработки грудных мышц.
                Также оно дополнительно задействует переднюю часть плеча.
                Трицепсы в данном упражнении играют роль основных мышц-помощников.
              </li>
              <h6>Подходы</h6>
              <ol>
                <li>
                  10 повторений
                </li>
                <li>
                  10 повторений
                </li>
                <li>
                  8 повторений
                </li>
              </ol>
              <li>
                Подтягивания на перекладине — это многосуставное упражнение для увеличения силы и массы верха спины,
                бицепсов и мышц кора.
                Упражнение часто используют как показатель силы относительно веса собственного тела.
              </li>
              <h6>Подходы</h6>
              <ol>
                <li>
                  10 повторений
                </li>
                <li>
                  8 повторений
                </li>
                <li>
                  8 повторений
                </li>
              </ol>
              <li>
                Подъем штанги на бицепс — это самое узнаваемое упражнение для рук в бодибилдинге и фитнесе.
                Позволяет накачать бицепсы, рвущие рукава и брать бо̀̀льшие веса, чем в других вариантах подъемов на
                бицепс.
                Обычно выполняется в среднем или высоком диапазоне повторений,
                например 8-12 и более, как часть тренировки рук.
              </li>
              <h6>Подходы</h6>
              <ol>
                <li>
                  8 повторений
                </li>
                <li>
                  8 повторений
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
  name: "WorkoutEditor"
}
</script>

<style scoped>

</style>