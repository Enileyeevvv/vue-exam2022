<template>
    <div>
        <form 
            accept-charset="UTF-8"
            v-on:submit.prevent="onSubmit()"
            method="POST"
        >
            <div class="form-line">
                <label> Название услуги
                    <input type="text" v-model="name"  placeholder="Название">
                </label>
                <label> Описание услуги
                    <input type="text" v-model="description" placeholder="Введите значение">
                </label>
                <label> Описание услуги
                    <select v-model="category" name="" id="">
                        <option value="1">----</option>
                        <option value="2">Образование</option>
                        <option value="3">Здоровье</option>
                        <option value="4">Транспорт</option>
                        <option value="5">Документы</option>
                        <option value="6">Штрафы и налоги</option>
                    </select>
                </label>
            </div>
            <button class="submit-btn" type="submit">Отправить</button>
        </form>
    </div>
</template>

<script>
export default {
  data() {
      return {
        name: '',
        description: '',
        category: 1
    }
  },
  methods: {
      async onSubmit() {
        const data = {
            name: this.name,
            description: this.description,
            category: Number(this.category)
        }  
        if (
            data.name === '' ||
            data.description === ''
        ) {
            alert('Заполните все поля формы')
        } else {
            await this.$store.dispatch('postForm/postForm', data);
            alert(JSON.stringify(this.$store.getters['postForm/answer']));
        }
      }
  }
}
</script>


<style scoped>
    .submit-btn {
        background: #fefefe;
        padding: 10px;
        color: #000;
        border-radius: 10px;
    }

    select {
        background: #fff;
        padding: 5px;
        width: 100%;
        border-radius: 10px;
    }

    .form-line {
        margin-bottom: 15px
    }


    input {
        background: #fff;
        color: #000;
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        margin-bottom: 15px;
    }

    form {
        max-width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }
</style>
