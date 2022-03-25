<template>
  <button
    :class="[
      'ax-button',
      `ax-button--${type}`,
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle':circle
      },
    ]"
    :disabled="disabled"
    @click="btnClick"
  >
    <!-- <i class="ax-icon ax-icon-loading"></i> -->
    <i class="ax-icon-loading" v-if="loading"></i>
    <i class="ax-icon" :class="icon" v-if="icon && !loading"></i>
    <!-- {{$slots.default}} -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "ax-button",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    loading:{
      type:Boolean,
      default:false
    },
    icon: {
      type: String,
      default: "",
    },
    disabled: Boolean,
    plain: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    circle: {
        type:Boolean,
        default:false
    },
  },
  methods:{
    btnClick(e){
      this.$emit('click',e)
    }
  }
};
</script>

<style lang="scss" scoped>
.ax-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #dcdfe6;
  color: red;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -o-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  // 属性样式
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &:hover {
    opacity: 0.5;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
}
// 类型样式
.ax-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &.is-plain {
    color: #409eff;
    background: #ecf5ff;
    border-color: #b3d8ff;
  }
}
.ax-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &.is-plain {
    color: #67c23a;
    background: #f0f9eb;
    border-color: #c2e7b0;
  }
}
.ax-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &.is-plain {
    color: #909399;
    background: #f4f4f5;
    border-color: #d3d4d6;
  }
}
.ax-button--warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &.is-plain {
    color: #e6a23c;
    background: #fdf6ec;
    border-color: #f5dab1;
  }
}
.ax-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &.is-plain {
    color: #f56c6c;
    background: #fef0f0;
    border-color: #fbc4c4;
  }
}
.ax-button--text {
  border-color: transparent;
  color: #409eff;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
}
.ax-button--medium {
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.ax-button--small {
  padding: 9px 15px;
  font-size: 12px;
  border-radius: 3px;
}
.ax-button--mini {
  padding: 7px 15px;
  font-size: 12px;
  border-radius: 3px;
}
// 设置文字和icon 间隔
.ax-button[class*=ax-icon-]+span{
  margin-left: 5px;
}
</style>
