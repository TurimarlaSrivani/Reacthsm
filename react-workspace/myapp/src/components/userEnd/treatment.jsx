import React, { Component } from "react";

class Treatment extends Component {
  state = {};
  render() {
    return (
      <div class="card mb-3" style={{ background: "#DAEFF3 " }}>
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src="https://media.istockphoto.com/videos/in-the-hospital-pregnant-woman-getting-sonogram-ultrasound-screening-video-id969542012?b=1&k=6&m=969542012&s=640x640&h=xZmUCmHiGViGqmUjPrRRfXMujqln7Ub4fFOT_Pzc3qc="
              width="400"
              height="400"
              role="img"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">
                <strong>UltraSound</strong>
              </h3>
              <p class="card-text">
                Ultrasound (also termed sonography, ultrasonography, and Doppler
                study) is a non-invasive diagnostic medical technique that uses
                high-frequency sound waves to produce images (sonogram) of the
                internal structures of the body. These sound waves are not
                detectable by human hearing.
              </p>
              <p>
                A small device called an ultrasound probe is used, which gives
                off high-frequency sound waves. You can't hear these sound
                waves, but when they bounce off different parts of the body,
                they create "echoes" that are picked up by the probe and turned
                into a moving image. This image is displayed on a monitor while
                the scan is carried out.
              </p>
              <p class="card-text"></p>
            </div>
          </div>
        </div>

        <div class="row g-0 mt-4">
          <div class="col-md-4">
            <img
              src="https://www.dr-hempel-network.com/wp-content/uploads/2018/08/Surgeons-performing-operation-in-operation-room-629763042_727x484.jpeg"
              width="400"
              height="400"
              role="img"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">
                <strong>Surgeries</strong>
              </h3>
              <p class="card-text">
                Some of the most common surgical operations done in the United
                States include the following:
                <p>
                  <strong>Appendectomy:</strong> An appendectomy is the surgical
                  removal of the appendix, a small tube that branches off the
                  large intestine, to treat acute appendicitis. Appendicitis is
                  the acute inflammation of this tube due to infection.
                </p>
                <p>
                  <strong>Breast biopsy:</strong> A biopsy is a diagnostic test
                  involving the removal of tissue or cells for examination under
                  a microscope. This procedure is also used to remove abnormal
                  breast tissue. A biopsy may be done using a hollow needle to
                  extract tissue (needle biopsy), or a lump may be partially or
                  completely removed (lumpectomy) for examination and/or
                  treatment.
                </p>
                <p>
                  <strong>Carotid endarterectomy:</strong> Carotid
                  endarterectomy is a surgical procedure to remove blockage from
                  carotid arteries, the arteries located in the neck that supply
                  blood to the brain. Left untreated, a blocked carotid artery
                  can lead to a stroke.
                </p>
              </p>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
        <div class="row g-0 mt-4">
          <div class="col-md-4">
            <img
              src="https://images.click.in/classifieds/images/189/03_03_2017_10_51_34_qkl8phh3cdnscb22uf5uecf9q3_bucol10rjk.jpg"
              width="400"
              height="400"
              role="img"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h3 class="card-title">
                <strong>Neurology</strong>
              </h3>
              <p class="card-text">
                Neurology is the branch of medicine concerned with the study and
                treatment of disorders of the nervous system. The nervous system
                is a complex, sophisticated system that regulates and
                coordinates body activities. It has two major divisions:
                <p>
                  <strong>Central nervous system:</strong> the brain and spinal
                  cord
                </p>
                <p>
                  <strong>Peripheral nervous system:</strong> all other neural
                  elements, such as eyes, ears, skin, and other "sensory
                  receptors"
                </p>
              </p>
              <p class="card-text"></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Treatment;