import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from 'components/Layout';
import Form from 'components/Form';
import { EFormOrientation } from 'components/Form/types';

import { initForm, removeForm, setFormInitialValues } from 'store/form/actions';
import { makeSelectProfileData } from 'store/users/selectors';

import normalizeDataToForm from 'utils/normalizeDataToForm';

import { personalConfig, systemConfig }from './form/configs';
import { PERSONAL_SETTINGS_FORM, SYSTEM_SETTING_FORM } from './form/constants';


const SettingsPage = (): JSX.Element => {
  const dispatch = useDispatch();
  const profileData = useSelector(makeSelectProfileData);
  const [isFormDisabled, setIsFormDisabled] = useState<boolean>(true);

  useEffect(() => {
    if(profileData) {
      dispatch(setFormInitialValues({
        form: PERSONAL_SETTINGS_FORM,
        instance: normalizeDataToForm(profileData, personalConfig)
      }));
      // dispatch(setFormInitialValues({ form: SYSTEM_SETTING_FORM, instance: {} }));
    }
    // dispatch
    // eslint-disable-next-line
  },[profileData]);

  const handleDisable = (): void => {
    setIsFormDisabled(false);
  };

  const handleEnable = (): void => {
    setIsFormDisabled(true);
  };

  useEffect(
    () => {
      dispatch(initForm({ form: PERSONAL_SETTINGS_FORM, config: personalConfig, }));
      dispatch(initForm({ form: SYSTEM_SETTING_FORM, config: systemConfig }));
      return () => {
        dispatch(removeForm({ form: PERSONAL_SETTINGS_FORM }));
        dispatch(removeForm({ form: SYSTEM_SETTING_FORM }));
      };
    },
    // Need to call this effect only once at mount
    // eslint-disable-next-line
    []
  );

  return(
    <Layout pageClassName="settings-page" withoutRightSidebar>
      <div className="settings-page_wrapper">
        <div className="left-side">
          <div className="header">
            <h2>
              Personal
            </h2>
            <span onClick={handleDisable}>
              Edit profile
            </span>
          </div>
          <div className="body">
            <Form
              className="personal-settings_form"
              isFormDisabled={isFormDisabled}
              name={PERSONAL_SETTINGS_FORM}
              config={personalConfig}/>
          </div>
        </div>
        <div className="right-side">
          <div className="header">
            <h2>
              System
            </h2>
          </div>
          <div className="body">
            <Form
              orientation={EFormOrientation.VERTICAL}
              className="system-setting_form"
              name={SYSTEM_SETTING_FORM}
              config={systemConfig}
            />
            <button onClick={handleEnable}>Save Changes</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default SettingsPage;
