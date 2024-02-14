import mongoose from "mongoose"

interface SampleInterface {
     sample: string
}

const sampleSchema = new mongoose.Schema<SampleInterface>({
     sample: {
          type: String,
     }
}) 

const sampleModel = mongoose.model('sample', sampleSchema);

export = sampleModel;