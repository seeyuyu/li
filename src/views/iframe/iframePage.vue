<template>
    <div ref="pageHeight">
        <iframe
            width='100%'
            src="http://192.168.11.43:8012/ManualUpload/ManualUpload"
        ></iframe>
    </div>
</template>
<script>
export default {
  data () {
    return {
      clientHeight: 0
    }
  },
  mounted () {
    console.log(document.body.clientHeight)
    this.clientHeight = document.body.clientHeight
    window.onresize = () => {
      return (() => {
        this.clientHeight = document.body.clientHeight
        // window.screenWidth = document.body.clientWidth
        // that.screenWidth = window.screenWidth
      })()
    }
  }
}
</script>
<style scoped>
.content {
    padding: 0px;
}
iframe {
    border: 0px;
    position:absolute;
    left:10px;
    right:10px;
    height:100%;
    top:100px;
}
</style>
