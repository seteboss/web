<template>
  <form class="form-signin text-main-color max-width-mod">
    <div class="modal-header">
      <h5 class="modal-title" id="modalLongDietTitle">Текущая диета</h5>
    </div>
    <div class="modal-body text-center">
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
    <div class="modal-footer">
      <router-link class="btn btn-secondary  text-main-color bg-black border-main"  to="/profile" tag="button">Закрыть</router-link>
    </div>
  </form>
</template>

<script>
import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'
export default {
name: "CurrentDiet",
  bootstrap,
  styles
}
</script>

<style scoped>

</style>