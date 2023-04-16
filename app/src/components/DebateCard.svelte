<script lang="ts">
  export let name = '';
  export let author = '';
  export let thumbnail = '';
  export let uploadDate = '';
</script>

<main>
  <div id="debate-card">
    <div id="thumbnail">
      <img src="" alt="thumbnail">
    </div>
    <div id="title">
      <h2>หัวข้อคลิปดีเบต</h2>
    </div>
    <div id="author">
      <h3>ผู้อัพโหลดคลิป</h3>
    </div>
    <div id="upload-date">
      <h5>วันที่อัพโหลด</h5>
    </div>
  </div>
</main>

<style>
  #debate-card {
    width: 400px;
    height: 300px;
    outline: 3px solid black;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
  }
</style>
