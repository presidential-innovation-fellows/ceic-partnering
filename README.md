#CEIC Partnering Tool

This is the public repo for the Lab Partnering Service, which is a tool designed
to help guide inquiries related to clean energy technologies to experts within
the Department of Energy and other Federal Agencies.

## Documentation
This project was generated using [static-gen](https://github.com/presidential-innovation-fellows/static-gen): a static site generator built by
the Presidential Innovation Fellows.

To get started, run `npm-install` to install dependencies and then `grunt` to
start the server locally.

This repository also enables Grunt deployment to [Cloud.gov](https://cloud.gov).
After properly authenticating with Cloud.gov, run `grunt cloud-gov-deploy`.

## Form Data
This repo does not contain the custom configuration needed to send data
to Nutshell or any other CMS. It does however contain the WooFoo form submission endpoints located in each of the `.jade` files located in `src/forms`. Once
you’ve configured your own WooFoo account or similar service, you can change
these endpoints to submit to your account.

### Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
