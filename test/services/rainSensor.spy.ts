import { Service } from 'hap-nodejs';
import { RainSensorImpl } from '../../src/services/rainSensor';

export class RainSensorImplSpy extends RainSensorImpl {
    public service?: Service;

    protected override createService(): Service {
        if (this.service !== undefined) {
            return this.service;
        }        

        return super.createService();
    }

    public unsafeSetLastValue(value: number | undefined): void {
        this.setLastValue(value);
    }

    public unsafePollOnce(): Promise<void> {
        return this.pollOnce();
    }
}