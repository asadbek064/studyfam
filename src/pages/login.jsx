const LoginPage = () => {
  return (
    <div>
      <section class="h-screen">
        <div class="container h-full px-6 py-12">
          <div class="g-6 text-gray-800 flex h-full flex-wrap items-center justify-center">
            <div class="mb-12 lg:w-6/12 md:mb-0 md:w-8/12">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="w-full"
                alt="Phone image"
              />
            </div>
            <div class="lg:ml-20 lg:w-5/12 md:w-8/12">
              <form>
                <div class="mb-6">
                  <input
                    type="text"
                    class="form-control text-gray-700 bg-white border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 m-0 block w-full rounded border border-solid bg-clip-padding px-4 py-2 text-xl font-normal transition ease-in-out focus:outline-none"
                    placeholder="Email address"
                  />
                </div>
                <div class="mb-6">
                  <input
                    type="password"
                    class="form-control text-gray-700 bg-white border-gray-300 focus:text-gray-700 focus:bg-white focus:border-blue-600 m-0 block w-full rounded border border-solid bg-clip-padding px-4 py-2 text-xl font-normal transition ease-in-out focus:outline-none"
                    placeholder="Password"
                  />
                </div>

                <div class="mb-6 flex items-center justify-between">
                  <div class="form-group form-check">
                    <input
                      type="checkbox"
                      class="form-check-input border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border bg-contain bg-center bg-no-repeat align-top transition duration-200 focus:outline-none"
                      id="exampleCheck3"
                      checked
                    />
                    <label class="form-check-label text-gray-800 inline-block" for="exampleCheck2">
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#!"
                    class="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 transition duration-200 ease-in-out"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700 active:bg-blue-800 inline-block w-full rounded px-7 py-3 text-sm font-medium uppercase leading-snug shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign in
                </button>

                <div class="before:border-gray-300 after:border-gray-300 my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t after:mt-0.5 after:flex-1 after:border-t">
                  <p class="mx-4 mb-0 text-center font-semibold">OR</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
