import Navbar from '/app/component/nav';

export default function about() {
    return (
      <>
      <Navbar />
        <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/m.png" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">เกมแนะนำ</h5>
                        <p class="card-text">kuy i Aom
                            .</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/a.png" class="custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">เกมแนะนำ</h5>
                        <p class="card-text">kuy i ii iiiii.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="card mb-3">
                    <img src="/img/r.png" class="card-img-top custom-img"
                        alt="Card Image"></img>
                    <div class="card-body text-center">
                        <h5 class="card-title">เกมแนะนำ</h5>
                        <p class="card-text">Sgggggggggggggggggggggggggggggggggggggggg
                            the card's content.</p>
                        <a href="#" class="btn btn-primary">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
    );
  }
  