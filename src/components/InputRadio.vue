<template>
  <div class="radio_buttons">
    <div>
      <input
          type="radio"
          :name="name"
          :id="uniq"
           />
      <label :for="uniq">Текст radio кнопки №1</label>
    </div>

<!--    <div>
      <input type="radio" name="option" id="radio2" />
      <label for="radio2">radio кнопка №2</label>
    </div>
    <div>
      <input type="radio" name="option" id="radio3" />
      <label for="radio3">Еще текст radio кнопки №3</label>
    </div>
    <div>
      <input type="radio" name="option" id="radio4" />
      <label for="radio4">radio №4</label>
    </div>-->

  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'uniq'
    },
    uniq: {
      type: String,
      default: 'uniq'
    },
    label: {
      type: String,
      default: ''
    }
  },
}
</script>


<style>
.radio_buttons {
  margin: 20px;
  font: 14px Tahoma;
}
.radio_buttons div {
  float: left;
}
.radio_buttons input {
  position: absolute;
  left: -9999px;
}
.radio_buttons label {
  display: block;
  margin: 0 0 0 -1px;
  padding: 8px 10px;
  border: 1px solid #BBBBBB;
  background: linear-gradient(to bottom,  rgba(255,255,255,1) 0%,rgba(229,229,229,1) 100%);
  box-shadow: 0 2px 5px rgba(0, 0, 0, .12);
  cursor: pointer;
}
.radio_buttons input:checked + label {
  background: white;
  box-shadow: inset 0 3px 6px rgba(0, 0, 0, .2);
}
.radio_buttons div:first-child label {
  margin-left: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}
.radio_buttons div:last-child label {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
