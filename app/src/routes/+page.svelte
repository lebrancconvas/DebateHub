<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import DebateCard from '../components/DebateCard.svelte';
	let hello = '';
	function searchHandle() {
		console.log(`Hello ${hello}`);
	}

	const fetchItems = async() => {
		const response = await fetch('http://localhost:7901/api');
		const data = await response.json();
		const items = data.items;
		return items;
	};


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
			<h2>
				ติดตามคอนเทนต์การดีเบต และ การประชันวิสัยทัศน์ของพรรคการเมืองในหัวข้อต่างๆ
				ตลอดช่วงก่อนการเลือกตั้งปี 2566
			</h2>
		</div>
	</header>
	<section id="search-section">
		<div id="search-box">
			<input type="text" placeholder="ค้นหาวิดิโอดีเบตที่ต้องการ" bind:value={hello} />
			<!-- <button on:click={searchHandle}>ค้นหา</button> -->
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
        <div id="category">
          <ul>
            <li>เศรษฐกิจ</li>
            <li>การศึกษา</li>
            <li>กีฬา</li>
          </ul>
        </div>
			</div>
			<div id="filter-by-geography">
				<h3>เลือกตามภูมิภาค</h3>
        <div id="category">
          <ul>
            <li>ภาคกลาง</li>
            <li>ภาคเหนือ</li>
            <li>ภาคอีสาน</li>
            <li>ภาคใต้</li>
            <li>ภาคตะวันออก</li>
          </ul>
        </div>
			</div>
		</div>
	</section>
  <hr>
	<section id="display-section">
    <div id="topic">
      <h2>รวมลิสต์วิดิโอดีเบตทัั้งหมด</h2>
    </div>
		<div id="container">
			{#await fetchItems()}
				<h3>loading...</h3>
			{:then items}
				{#each items as item}
					<DebateCard name={item.snippet.title} author={item.snippet.channelTitle} uploadDate={item.snippet.publishedAt.split('T')[0]} link={`https://youtube.com/watch?v=${item.id}`} />
				{/each}
			{/await}
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

	h1 {
		font-size: 35px;
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

  /* Change from Vertical to Horizontal */
  #category {

  }

  #topic {
    text-align: center;
  }

	/* #display-section > #container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  } */
</style>
