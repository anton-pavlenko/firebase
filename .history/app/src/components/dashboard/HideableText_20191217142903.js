import react from 'react'

export default class HideableText extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            isHidde
        }
    }

    render() {
        retrun (

            <section className="row form-group mb-xl-3 mb-lg-3 mb-md-0 mb-sm-0 mb-0">
            <section className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1">
              <div className="rbt clearfix open col-12 px-0">
                <div className="rbt-input-hint-container">
                  <input aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" autocomplete="nope" placeholder="Origin" role="combobox" type="text" class="rbt-input-main form-control rbt-input " value={this.state.value} onChange={this.handleChange} />

                <div className="rbt-input-hint">
                <input className="input_area" aria-hidden="true" readonly="" tabindex="-1" value=""></input>
                <div className="input_style"></div>
                </div>
                </div>
                <div aria-atomic="true" aria-live="polite" class="sr-only rbt-sr-status" role="status">19 results. Use up and down arrow keys to navigate.</div>
                
                <div aria-atomic="true" aria-live="polite" class="sr-only rbt-sr-status" role="status">0 selections</div>
              </div>
            </section>

            <section className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mb-xl-0 mb-lg-0 mb-md-1 mb-sm-1 mb-1">
              <div className="rbt clearfix open col-12 px-0">
                <div className="rbt-input-hint-container">
                  <input aria-autocomplete="both" aria-expanded="false" aria-haspopup="listbox" autocomplete="nope" placeholder="Destination" role="combobox" type="text" class="rbt-input-main form-control rbt-input" value={this.state.value} onChange={this.handleChange} />
                <div className="rbt-input-hint">
                <input className="input_area" aria-hidden="true" readonly="" tabindex="-1" value=""></input>
                <div className="input_style"></div>
                </div>
                </div>
                <div aria-atomic="true" aria-live="polite" class="sr-only rbt-sr-status" role="status">0 selections</div>
              </div>
            </section>
          </section>
        )
    }
}