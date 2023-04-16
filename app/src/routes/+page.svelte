<script lang="ts">
  import DebateCard from '../components/DebateCard.svelte';
  let hello = '';
  function searchHandle() {
    console.log(`Hello ${hello}`);
  }
</script>

<svelte:head>
  <title>Debate Hub | ติดตามการประชันวิสัยทัศน์ก่อนเลือกตั้งปี 2566</title>
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
      <input type="text" placeholder="ค้นหาหัวข้อการดีเบตที่ต้องการ" bind:value={hello} />
      <button on:click={searchHandle}>ค้นหา</button>
    </div>
  </section>
  <section id="filter-section">
    <div id="filter-box">
      <div id="filter-by-channel">
        <h3>เลือกตามช่อง</h3>
        <div id="category">
          <ul>
            <li>The Standard</li>
            <li>ช่อง 7</li>
            <li>ช่อง 3</li>
          </ul>
        </div>
      </div>
      <div id="filter-by-topic">
        <h3>เลือกตามหัวข้อ</h3>
      </div>
      <div id="filter-by-geography">
        <h3>เลือกตามภูมิภาค</h3>
      </div>
    </div>
  </section>
  <section id="display-section">
    <div id="container">
      <DebateCard />
      <DebateCard />
      <DebateCard />
      <DebateCard />
      <DebateCard />
      <DebateCard />
      <DebateCard />
    </div>
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

  #display-section > #container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  /* #display-section > #container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  } */
</style>
