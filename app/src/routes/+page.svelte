<script lang="ts">
  let hello = '';
  function searchHandle() {
    console.log(`Hello ${hello}`);
  }
</script>

<svelte:head>
  <title>Debate Hub</title>
</svelte:head>

<main>
  <header>
    <div>
      <h1>Debate Hub</h1>
    </div>
    <div>
      <h2>ติดตามคอนเทนต์การดีเบต และ การประชันวิสัยทัศน์ของพรรคการเมืองในหัวข้อต่างๆ ตลอดช่วงก่อนการเลือกตั้งปี 2566</h2>
    </div>
  </header>
  <section id="search-section">
    <div id="search-box">
      <input type="text" placeholder="ค้นหาคำที่ต้องการ" bind:value={hello} /> 
      <button on:click={searchHandle}>ค้นหา</button>
    </div>
  </section>
  <section id="display-section">

  </section>
</main>


<style>
  * {
    font-family: 'Kanit', sans-serif;
  }
  header {
    text-align: center;
  }

  #search-section {
    text-align: center;
  }

  #search-box > input {
    width: 50%;
    height: 30px;
    border-radius: 5px;
    font-size: 23px;
    padding: 5px;
  }

  #search-box > button {
    width: 100px;
    height: 41px;
    border-radius: 5px;
    background-color: #1e88e5;
    color: white;
    outline: none;
    cursor: pointer;
  }
</style>
