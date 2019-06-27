import React, { Component } from 'react'
import { Text } from 'react-native'
import { styles } from './styles'
import { View } from 'react-native-animatable'
import InputBox from '@Components/InputBox'
import BarButton from '@Components/BarButton'
import RadioButton from '@Components/RadioButton'
import I18n from 'react-native-i18n'

export default class SignUpDetailsView extends Component {
  render () {
    return (
      <View>
        <View style={styles.nameViewContainer}>
          <InputBox placeHoldertext={I18n.t('loginOrSignUpView.fullNAme')} />
        </View>
        <Text style={styles.detailsViewText}>Who are you?</Text>
        <RadioButton
          radioListData={this.props.radioData}
          buttonAction={id => {
            console.tron.log('radio button tapped------')
            // this.setState({ radioButtonSelectedId: id })
            this.props.changeButtonSelectedId(id)
            this.props.radioButtonTapped(id)
          }}
        />
        <View style={styles.signUpButtonView}>
          <BarButton
            radius={{ borderRadius: 4 }}
            buttonText={I18n.t('signUp')}
          />
        </View>
      </View>
    )
  }
}
