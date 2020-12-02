<template>
  <form class="form-signin text-main-color max-width-mod">
    <div class="modal-header">
      <h5 class="modal-title" id="modalLongProgramTitle">Текущая программа</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body text-center">
      <img class="text-center" src="../img/logo.png" alt="" width="200" height="200">
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
            <ol class="mb-3">
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
            <ol class="mb-3">
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
    <div class="modal-footer">
      <router-link class="btn btn-secondary  text-main-color bg-black border-main"  to="/profile" tag="button">Закрыть</router-link>
    </div>
  </form>
</template>

<script>
import bootstrap from '@/style/bootstrap.css'
import styles from '@/style/style.css'
export default {
  name: "CurrentProgram",
  styles,
  bootstrap
}
</script>

<style scoped>

</style>