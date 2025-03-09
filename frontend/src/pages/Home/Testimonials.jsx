const Testimonials = () => {
  return (
    <div className="section-container py-16">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:4/5">
            <p className="subtitle">Testimonials</p>
            <h2 className="title"> what customer say about us</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              "As a software developer, I'm always on the lookout for unique
              accessories to express my love for coding. The Keyboard Key
              Keychain is not only stylish but also durable. Will definitely be
              purchasing more items!"
            </blockquote>
            <div className="flex text-center gap-4 flex-wrap">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial1.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial2.png" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial3.png" />
                  </div>
                </div>
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-12">
                    <span>+99</span>
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <h5 className="text-lg font-semibold ">Customer Feedback</h5>
                <div className="flex item-center gap-2">
                  <div className="rating">
                    <input
                      type="radio"
                      name="rating"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked
                      disabled
                    />
                  </div>
                  <span className="font-semibold">4.9</span>
                  <span className="text-[#097e7]">(25.1k reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;