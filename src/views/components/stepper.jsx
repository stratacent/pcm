import React, { Component } from 'react';
import Stepper from 'bs-stepper'

import '../../styles/table.css';



export default class WeekStepper extends Component {


    
    constructor(props) {
        super(props);
        this.state = {
            name: 'React',
            datesArray : [],
            steps: [],
            activeStep: 0
        };
    }

    setStep(currentStep) {

        const {activeStep} = this.state;
        
        if(activeStep !== currentStep.stepNum - 1) {
            this.setState({activeStep: currentStep.stepNum - 1})
            this.updateAndNotify(this.state.datesArray, currentStep.stepNum - 1);
            this.props.stepChangeCallback(currentStep.stepNum - 1);
        }
    }

   

    componentDidUpdate(prevProps) {
        if (prevProps.datesArray !== this.props.datesArray) {
            this.setState({datesArray: this.props.datesArray})
            this.updateAndNotify(this.props.datesArray);
            
        }
    }

    updateAndNotify(datesArray, stepNum = 0) {
        console.log(datesArray);
        const steps = [];
        datesArray.map((item, index) => {
            const stepObj = {};
            stepObj.stepNum = index + 1;
            stepObj.label = 'Week ' + (index + 1);
            stepObj.data = item;
            steps.push(stepObj);
        })
        this.setState({steps: steps, activeStep: stepNum});
        
    }

    componentDidMount() {
        
    }

    onSubmit(e) {
        e.preventDefault()
    }

    render() {
        const { steps, activeStep } = this.state;
        return (
            <div>
                <div id="stepper1" className="bs-stepper">
                    <div className="bs-stepper-header">
                        {
                            steps.map((step, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <div class="step">
                                            <button className="step-trigger" onClick={() => this.setStep(step)}
                                                style={{display: 'flex', flexDirection: 'column'}}>


                                                <span className={`bs-stepper-circle ${activeStep === step.stepNum-1 ? 'activeStep' : ''}`}>{step.stepNum}</span>
                                                <span className={`bs-stepper-label ${activeStep === step.stepNum-1 ? 'activeStepLabel' : ''}`}>{step.label}</span>
                                            </button>
                                        </div>
                                        {index < steps.length - 1 &&
                                            <div className="line"></div>}
                                    </React.Fragment>
                                )
                            })

                        }

                    </div>
                </div>
            </div>
        );
    }
}


