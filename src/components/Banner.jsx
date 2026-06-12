import "../styles/Banner.css";

export default function Banner() {
  return (
    <>
      <div className="banner-content-container">
        <div className="banner-details-container">
          <div className="banner-heading-content">
            <h1>
              Good Food
              <br />
              Deserves
            </h1>
            <span className="banner-green-header">Another Change</span>
          </div>
          <div className="banner-para-content">
            <p>
              Share bits connects with NGO's and <br /> people in need to reduce
              waste and spread kindness.
            </p>
          </div>
          <div className="banner-button-content">
            <div>
              <button className="banner-donate-btn">
                <div className="banner-donate-btn-aln">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#ffff"
                  >
                    <path d="M586.33-383q46.67-36.33 61.34-95l-69.67.67q-13.33 29-39.67 46.5-26.33 17.5-58.33 17.5t-58.33-17.5q-26.34-17.5-39.67-46.5h-69.67q14.67 58 61.19 94.33 46.52 36.33 106.33 36.33 59.82 0 106.48-36.33Zm-185.5-176.26q12.5-12.59 12.5-30.83t-12.59-30.74q-12.59-12.5-30.83-12.5t-30.74 12.59q-12.5 12.59-12.5 30.83t12.59 30.74q12.59 12.5 30.83 12.5t30.74-12.59Zm220 0q12.5-12.59 12.5-30.83t-12.59-30.74q-12.59-12.5-30.83-12.5t-30.74 12.59q-12.5 12.59-12.5 30.83t12.59 30.74q12.59 12.5 30.83 12.5t30.74-12.59ZM480-120.67l-46.67-40.66Q329-253.33 260.67-321 192.33-388.67 152-442t-56.17-97.33Q80-583.33 80-628.67q0-90.29 61.33-150.81 61.34-60.52 152-60.52 55.34 0 103.34 25.33 48 25.34 83.33 72.67 39.33-49.33 86.33-73.67 47-24.33 100.34-24.33 90.66 0 152 60.52Q880-718.96 880-628.67q0 45.34-15.83 89.34-15.84 44-56.17 97.33T699.67-321q-68 67.67-173 159.67L480-120.67Zm0-88.66Q579.33-297.67 643.67-360q64.33-62.33 102-109.83 37.66-47.5 52.66-84.67t15-73.89q0-62.94-41.33-103.94t-105.18-41q-50.02 0-92.59 29.83-42.56 29.83-65.56 81.5h-58q-22.34-51-64.9-81.17-42.57-30.16-92.59-30.16-63.85 0-105.18 40.66-41.33 40.67-41.33 104.04 0 36.96 15 74.46 15 37.5 52.66 85 37.67 47.5 102.34 109.84Q381.33-297 480-209.33Zm0-282Z" />
                  </svg>
                  Donate Food
                </div>
              </button>
            </div>
            <div>
              <button className="banner-Request-btn">
                <div className="banner-Request-btn-aln">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30px"
                    viewBox="0 -960 960 960"
                    width="40px"
                    fill="#1f1f1f"
                  >
                    <path d="m480-120.67-46.67-42q-104.18-95.08-172.25-164.04Q193-395.67 152.67-450.17q-40.34-54.5-56.5-99.16Q80-594 80-640q0-91.44 61.33-152.72 61.34-61.28 152-61.28 55.34 0 103.34 25.33 48 25.34 83.33 72.67 39.33-49.33 86.33-73.67 47-24.33 100.34-24.33 90.66 0 152 61.28Q880-731.44 880-640q0 46-16.17 90.67-16.16 44.66-56.5 99.16-40.33 54.5-108.41 123.46-68.07 68.96-172.25 164.04l-46.67 42Zm0-88.66q99.49-90.67 163.75-155.5Q708-429.67 745.67-478.17q37.66-48.5 52.66-86.42t15-75.31q0-64.1-41.33-105.77-41.33-41.66-105.18-41.66-50.02 0-92.59 29.83-42.56 29.83-65.56 81.5h-58q-22.34-51-64.9-81.17-42.57-30.16-92.59-30.16-63.85 0-105.18 41.66-41.33 41.67-41.33 105.88 0 37.46 15 75.62 15 38.17 52.66 87Q252-428.33 316.67-363.83q64.66 64.5 163.33 154.5Zm0-289Z" />
                  </svg>
                  Request Food
                </div>
              </button>
            </div>
          </div>
          <div className="banner-icon-details">
            <div className="banner-icon-details-types">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#1f1f1f"
                >
                  <path d="M370.33-524.33Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67t-109.67-43.66ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.34 45.17 30.33 14.33 48.83 41.83T800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33Zm315.16-345.5Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33t61.83-24.84ZM480-634Zm0 407.33Z" />
                </svg>
              </div>
              <div className="banner-item">
                <h2>1500+</h2>
                <span>meals share</span>
              </div>
            </div>
            <div className="banner-icon-details-types">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#1f1f1f"
                >
                  <path d="M370.33-524.33Q326.67-568 326.67-634t43.66-109.67Q414-787.33 480-787.33t109.67 43.66Q633.33-700 633.33-634t-43.66 109.67Q546-480.67 480-480.67t-109.67-43.66ZM160-160v-100q0-36.67 18.5-64.17T226.67-366q65.33-30.33 127.66-45.5 62.34-15.17 125.67-15.17t125.33 15.5q62 15.5 127.34 45.17 30.33 14.33 48.83 41.83T800-260v100H160Zm66.67-66.67h506.66V-260q0-14.33-8.16-27-8.17-12.67-20.5-19-60.67-29.67-114.34-41.83Q536.67-360 480-360t-111 12.17Q314.67-335.67 254.67-306q-12.34 6.33-20.17 19-7.83 12.67-7.83 27v33.33Zm315.16-345.5Q566.67-597 566.67-634t-24.84-61.83Q517-720.67 480-720.67t-61.83 24.84Q393.33-671 393.33-634t24.84 61.83Q443-547.33 480-547.33t61.83-24.84ZM480-634Zm0 407.33Z" />
                </svg>
              </div>
              <div className="banner-item">
                <h2>250+</h2>
                <span>Active donors</span>
              </div>
            </div>
            <div className="banner-icon-details-types">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#1f1f1f"
                >
                  <path d="m636-458.67 84 78V-314H513.33v240.67L480-40l-33.33-33.33V-314H240v-66.67l80-78v-314.66h-46.67V-840h409.34v66.67H636v314.66Zm-304 78h292l-54.67-52v-340.66H386.67v340.66l-54.67 52Zm146 0Z" />
                </svg>
              </div>
              <div className="banner-item">
                <h2>180+</h2>
                <span>Ngo parters</span>
              </div>
            </div>
            <div className="banner-icon-details-types">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                  fill="#1f1f1f"
                >
                  <path d="M531.83-508.17q21.5-21.5 21.5-51.83t-21.5-51.83q-21.5-21.5-51.83-21.5t-51.83 21.5q-21.5 21.5-21.5 51.83t21.5 51.83q21.5 21.5 51.83 21.5t51.83-21.5ZM480-168q129.33-118 191.33-214.17 62-96.16 62-169.83 0-115-73.5-188.17-73.5-73.16-179.83-73.16-106.33 0-179.83 73.16Q226.67-667 226.67-552q0 73.67 63 169.83Q352.67-286 480-168Zm0 88Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
              </div>
              <div className="banner-item">
                <h2>50+</h2>
                <span>Location</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-green-board">
        <p>
          " Together, we can bulld a world whers no good food goes to waste "
        </p>
      </div>

      <div className="banner-video-content">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/757JydJni8I?si=Y5oXm1349bG9smAD"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
