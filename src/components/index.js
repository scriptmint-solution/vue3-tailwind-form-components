import BaseLabel from '@components/BaseLabel.vue'
import BaseInput from '@components/BaseInput.vue'
import BaseTextarea from '@components/BaseTextarea.vue'
import BaseCheckbox from '@components/BaseCheckbox.vue'
import BaseRadio from '@components/BaseRadio.vue'
import BaseRadioGroup from '@components/BaseRadioGroup.vue'
import FormError from '@components/FormError.vue'
import HelpBlock from '@components/HelpBlock.vue'

import ShowInput from '@components/ShowInput.vue'

export default app => {
    app.component('BaseLabel', BaseLabel)
    app.component('BaseInput', BaseInput)
    app.component('BaseTextarea', BaseTextarea)
    app.component('BaseCheckbox', BaseCheckbox)
    app.component('BaseRadio', BaseRadio)
    app.component('BaseRadioGroup', BaseRadioGroup)
    app.component('FormError', FormError)
    app.component('HelpBlock', HelpBlock)

    app.component('ShowInput', ShowInput)
}