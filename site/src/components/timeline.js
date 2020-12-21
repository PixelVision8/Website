import React from 'react';

function Timeline() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 border-palette-5 border-t-4">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Pixel Vision 8 Roadmap</h2>
            <p className="text-xl text-palette-15">Development on Pixel Vision 8 is a combination of a small core team and help from the community. The following roadmap represents the direction the project will be building towards over the next few releases.</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="text-xl text-palette-6">v0.8</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-palette-0 bg-palette-6 rounded-full">2018</div>
                  <div className="absolute left-0 h-full px-px bg-palette-5 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-palette-0 border-4 box-content border-palette-5 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4 text-palette-6">Early Access</h4>
                </div>
                <p className="text-lg text-palette-6">The first stable build that offers a preview of how PV8 will work.</p>
              </div>
            </div>

            {/* 1st item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="text-xl text-palette-6">v0.9</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-palette-0 bg-palette-6 rounded-full">2019</div>
                  <div className="absolute left-0 h-full px-px bg-palette-5 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-palette-0 border-4 box-content border-palette-5 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4 text-palette-6">Beta</h4>
                </div>
                <p className="text-lg text-palette-6">Finalize all tools, APIs, and features heading into a stable 1.x release.</p>
              </div>
            </div>

            {/* 2nd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="text-xl text-palette-6">v1.0</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-palette-0 bg-palette-6 rounded-full">2020</div>
                  <div className="absolute left-0 h-full px-px bg-palette-5 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-palette-0 border-4 box-content border-palette-5 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4 text-palette-6">Stable Build</h4>
                </div>
                <p className="text-lg text-palette-6">All features and tools are locked. This build represents the first stable build of PV8.</p>
              </div>
            </div>

            {/* 3rd item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                <div className="text-xl text-palette-14">v2.0</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-palette-0 bg-palette-14 rounded-full">2021</div>
                  <div className="absolute left-0 h-full px-px bg-palette-13 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-palette-0 border-4 box-content border-palette-14 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4 text-palette-14">Optimizations</h4>
                </div>
                <p className="text-lg text-palette-15">Rewrite the renderer, clean up the APIs, and update all of the tools to increase performance across all platforms.</p>
              </div>
            </div>

            {/* 4th item */}
            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
              <div className="text-xl text-palette-13">v3.0</div>
                <div className="flex items-center mb-3">
                  <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-palette-0 bg-palette-13 rounded-full">2022</div>
                  <div className="absolute left-0 w-2 h-2 bg-palette-0 border-4 box-content border-palette-13 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                  <h4 className="h4 text-palette-13">Portable</h4>
                </div>
                <p className="text-lg text-palette-13">With a finalized build, work will begine on making PV8 work on consoles, mobile, and ARM SOC based computers.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;