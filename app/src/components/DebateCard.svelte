<script lang="ts">
  export let name = '';
  export let author = '';
  export let thumbnail = '';
  export let uploadDate = '';
</script>

<main>
  <div id="debate-card">
    <div id="thumbnail">
      <img src={thumbnail} alt={name}>
    </div>
    <div id="title">
      <h2>{name}</h2>
    </div>
    <div id="author">
      <h3>{author}</h3>
    </div>
    <div id="upload-date">
      <h5>{uploadDate}</h5>
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
