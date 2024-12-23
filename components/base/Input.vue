<template>
  <div class="base-input w-full">
    <label class="label text-xs font-bold text-text-light dark:text-text-dark" :for="`#${name}`">{{ label }}</label>

    <div class="input-wrapper">
      <Field
        v-model="modelValue"
        :name="name"
        :id="name"
        :type="type"
        :placeholder="placeholder"
        :rules="validationRules"
        validate-on-input
        v-slot="{ field, errorMessage }"
      >
      <div class="relative">
        <input 
          v-bind="field"
          ref="inputEl"
          :type="type == 'password' ? (showPassword ? 'text' : 'password') : type" 
          :name="name" 
          :placeholder="placeholder" 
          class="w-full ps-11 mt-3 !bg-light dark:!bg-dark border border-gray2-light dark:border-gray2-dark py-2 px-3 rounded-md"
          :class="[{ '!border-red-500 is-invalid': errorMessage, '!border-green-400': !errorMessage && modelValue }]"
          :style="inputStyle"
        />
        <img v-if="icon" :src="icon" alt="icon" class="absolute top-[60%] start-4 -translate-y-1/2" />
        <component v-if="iconComponent" :is="iconComponent" class="absolute top-[60%] start-4 -translate-y-1/2" />
        <i v-if="fontIcon" :class="fontIcon" class="absolute top-[60%] start-5 -translate-y-1/2"></i>
        <i v-if="type === 'password'" class="pi !text-xl cursor-pointer absolute top-[60%] end-5 -translate-y-1/2" @click="togglePassword" :class="[{ 'pi-eye': !showPassword, 'pi-eye-slash': showPassword }]"></i>
      </div>

      <!-- Display validation error message -->
      <p v-if="errorMessage" class="text-xs font-light text-red-500 mt-1 ms-3">{{ errorMessage }}</p>
    </Field>
    </div>

  </div>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: false,
    default: 'text'
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  icon: {
    type: String,
    required: false
  },
  iconComponent: {
    
    required: false
  },
  fontIcon: {
    type: String,
    required: false
  },
  inputHeight: {
    type: String,
    default: '52px'
  },
  borderRadius: {
    type: String,
    default: '12px'
  },
  borderColor: {
    type: String,
    default: '#F3F3F3'
  },
  inputBgColor: {
    type: String,
    default: 'transparent'
  },
  validationRules: {
    type: Object,
    required: false,
    // default: () => yup.string().required('This field is required')
  }
})

const inputEl = ref(null)
const modelValue = defineModel('modelValue')
const showPassword = ref(false)

const inputStyle = computed(() => ({
  height: props.inputHeight,
  borderRadius: props.borderRadius,
  borderColor: props.borderColor,
  backgroundColor: props.inputBgColor
}));

/************************* Methods *************************/
const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style lang="scss" scoped>
.base-input {
  input {

    &::placeholder {
      // padding-inline-start: 48px !important;
      font-size: 12px ! important;
      font-weight: 400 ! important;
      color: #A7A9B7 !important;
    }
  }
}

</style>