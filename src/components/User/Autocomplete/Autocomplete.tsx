/* eslint-disable no-use-before-define */
import React, {useEffect, useState} from 'react';
import TextField from '@material-ui/core/TextField';
import MuiAutocomplete from '@material-ui/lab/Autocomplete';
import { UserRecord } from '../../../types/user';
import Button from '@material-ui/core/Button';

export default function Autocomplete({
  error,
  initValue,
  inputLabel,
  users = [],
  setValue,
  onChangeFilter,
}: ComboBoxProps) {
  const [value, setStateValue] = useState<UserRecord | null>(null);

  useEffect(() => {
    if (!initValue) return;
    handleChangeValue(initValue)
  }, [setStateValue, initValue]);

  const handleChange = e => onChangeFilter(e.target.value);
  const handleChangeValue = (value: UserRecord | null) => {
    setStateValue(value);
    setValue('user', value);
  };
  return (
    <MuiAutocomplete
      options={users}
      getOptionLabel={option => option.name}
      value={value}
      onChange={(event, newValue) => {
        handleChangeValue(newValue);
      }}
      style={{ width: 300 }}
      renderInput={params => (
        <TextField
          {...params}
          helperText={error && error.user && error.user.message}
          error={!!error}
          label={inputLabel}
          variant="outlined"
          onChange={handleChange}
        />
      )}
    />
  );
}

type ComboBoxProps = {
  error?: any;
  initValue: UserRecord | null;
  inputLabel: string;
  users: UserRecord[];
  setValue: (name: string, value: UserRecord | null) => void;
  onChangeFilter: (filter: string) => void;
};
