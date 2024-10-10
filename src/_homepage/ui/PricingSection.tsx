import { Button } from 'xtreme-ui';

interface PricingPlan {
    title: string
    price: string
    features: string[]
    actionLabel: string
    onActionClick: () => void
}

const pricingPlans: PricingPlan[] = [
    {
        title: 'Basic Plan',
        price: '$19/mo',
        features: ['Feature 1', 'Feature 2', 'Feature 3'],
        actionLabel: 'Get Started',
        onActionClick: () => {
            alert('Basic Plan selected')
        }
    },
    {
        title: 'Pro Plan',
        price: '$49/mo',
        features: ['Feature A', 'Feature B', 'Feature C'],
        actionLabel: 'Choose Pro',
        onActionClick: () => {
            alert('Pro Plan selected')
        }
    },
    {
        title: 'Enterprise Plan',
        price: '$99/mo',
        features: ['Feature X', 'Feature Y', 'Feature Z'],
        actionLabel: 'Contact Us',
        onActionClick: () => {
            alert('Enterprise Plan selected')
        }
    }
]

const PricingSection = () => {
    return (
        <section className="pricingSection" id='homepage-pricing'>
            <div className="pricingContent">
                <h2>Pricing Plans</h2>
                <p className="subHeading">
                    Choose the plan that fits your needs. No hidden fees, cancel anytime.
                </p>
                <div className="pricingPlans">
                    {pricingPlans.map((plan, index) => (
                        <div className="planCard" key={index}>
                            <h3>{plan.title}</h3>
                            <p className="price">{plan.price}</p>
                            <ul className="features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                            <div className="planAction">
                                <Button
                                    label={plan.actionLabel}
                                    onClick={plan.onActionClick}
                                    type="primary"
                                    className="button"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PricingSection
