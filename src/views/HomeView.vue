<template>
  <div class="home-container">
    <header class="home-header">
      <div>Welcome to My Trainer!!!</div>
      <div>you can watch every exercises infomation. Let's do it!!</div>
    </header>

    <div class="card_container">
      <div>Exercises</div>
      <div class="card_item">
        <div class="home_card">
          <div class="img">
            <img src="../assets/exercises/1.jpg" />
          </div>
          <div class="top-text">
            <div class="name">Bench Press</div>
            <p>Chest</p>
          </div>
          <div class="bottom-text">
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              quaerat iusto adipisci reprehenderit quasi cum perspiciatis,
              minima reiciendis magni quam!
            </div>
            <div class="btn">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
        <div class="home_card">
          <div class="img">
            <img src="../assets/exercises/2.jpg" />
          </div>
          <div class="top-text">
            <div class="name">Deadlift</div>
            <p>Leg, Back, etc</p>
          </div>
          <div class="bottom-text">
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              quaerat iusto adipisci reprehenderit quasi cum perspiciatis,
              minima reiciendis magni quam!
            </div>
            <div class="btn">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>

        <div class="home_card">
          <div class="img">
            <img src="../assets/exercises/3.jpg" />
          </div>
          <div class="top-text">
            <div class="name">Sqaut</div>
            <p>Leg</p>
          </div>
          <div class="bottom-text">
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              quaerat iusto adipisci reprehenderit quasi cum perspiciatis,
              minima reiciendis magni quam!
            </div>
            <div class="btn">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="card_container">
      <div>Programs</div>
      <div class="card_item">
        <div class="home_card">
          <div class="img">
            <img src="../assets/programs/nsuns.jpg" />
          </div>
          <div class="top-text">
            <div class="name">nSuns</div>
            <p>r/Fitness</p>
          </div>
          <div class="bottom-text">
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              quaerat iusto adipisci reprehenderit quasi cum perspiciatis,
              minima reiciendis magni quam!
            </div>
            <div class="btn">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
        <div class="home_card">
          <div class="img">
            <img src="../assets/programs/531bbb.jpg" />
          </div>
          <div class="top-text">
            <div class="name">5/3/1 BBB</div>
            <p>Jim Wendler</p>
          </div>
          <div class="bottom-text">
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              quaerat iusto adipisci reprehenderit quasi cum perspiciatis,
              minima reiciendis magni quam!
            </div>
            <div class="btn">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>

        <div class="home_card">
          <div class="img">
            <img src="../assets/programs/ppl.jpg" />
          </div>
          <div class="top-text">
            <div class="name">redditPPL</div>
            <p>r/Fitness</p>
          </div>
          <div class="bottom-text">
            <div class="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              quaerat iusto adipisci reprehenderit quasi cum perspiciatis,
              minima reiciendis magni quam!
            </div>
            <div class="btn">
              <a href="#">Read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {},
  data () {
    return {
      exercise_text: [
        '벤치프레스',
        '데드리프트',
        '스쿼트',
        '숄더프레스',
        '풀업'
      ]
    }
  }
}
</script>

<style>
.home-container {
  width: 100%;
}
.home-header {
  margin-top: 25px;
  font-size: large;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.home-container div:nth-last-child() {
  font-size: 20px;
  font-weight: 500;
  opacity: 0.8;
}
.card_container {
  height: 100%;
  display: grid;
  place-items: center;
  text-align: center;
}
.card_item {
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.home_card {
  height: 280px;
  max-width: 350px;
  margin: 0 20px;
  background: white;
  transition: 0.4s;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
}
.home_card:hover {
  height: 470px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
}
.home_card .img {
  height: 200px;
  width: 100%;
}
.home_card .img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.home_card .top-text {
  padding: 5px;
}
.home_card .top-text .name {
  font-size: 25px;
  font-weight: 600;
  color: #202020;
}
.home_card .top-text p {
  font-size: 20px;
  font-weight: 600;
  color: #e74c3c;
  line-height: 20px;
}
.home_card .bottom-text {
  padding: 0 20px 10px 20px;
  margin-top: 5px;
  background: white;
  opacity: 0;
  visibility: hidden;
  transition: 0.1s;
}
.home_card:hover .bottom-text {
  opacity: 1;
  visibility: visible;
}
.home_card .bottom-text .text {
  text-align: justify;
}
.home_card .bottom-text .btn {
  margin: 10px 0;
  text-align: left;
}
.home_card .bottom-text .btn a {
  text-decoration: none;
  background: #e74c3c;
  color: #f2f2f2;
  padding: 5px 8px;
  border-radius: 3px;
  display: inline-flex;
  transition: 0.2s;
}
.home_card .bottom-text .btn a:hover {
  transform: scale(0.9);
}
@media screen and (max-width: 978px) {
  .card_container {
    flex-wrap: wrap;
    flex-direction: column;
  }
  .home_card {
    max-width: 700px;
    margin: 20px 0;
  }
}
</style>
